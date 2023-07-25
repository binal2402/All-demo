import { Component } from "react";
import io from "socket.io-client";
import { Observable } from "rxjs";
import CryptoJS from "crypto-js";



let socket = io.connect(process.env.REACT_APP_SOCKET_API_KEY);

class service extends Component {
  apiURL = process.env.REACT_APP_API_KEY;
  socketApi = process.env.REACT_APP_SOCKET_API_KEY;
  imageUrl = process.env.REACT_APP_IMAGE_URL;
  loader = "data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
  perPage = 5

  connect = async (next) => {
    if (!socket) {
      socket = io.connect(process.env.REACT_APP_SOCKET_API_KEY)
      socket.on("connect", (res) => {
        console.log('res', socket)
        next(socket.connected);
      });
    } else {
      next(socket.connected)
    }
  };

  sendevent = (e, Data) => {
    return socket.emit("request", process.env.REACT_APP_DISABLE_ENCRYPTION === 'true' ? { event: e, data: Data } : this.encrypt({ event: e, data: Data }));
  };

  getevent = () => {
    var self = this;
    return Observable.create((observer) => {

      if (process.env.REACT_APP_DISABLE_ENCRYPTION === 'true') {
        socket.on("response", (data) => { observer.next(data); });
      }
      else {
        socket.on("response", async (data) => {
          var responseData = await self.decrypt(data)
          observer.next(responseData);
        });
      }

      socket.on("error", (data) => {
        console.log(data);
      });
    });
  };

  encrypt = (data) => {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data),
      process.env.REACT_APP_SECRET_KEY
    ).toString();
  };

  decrypt = (data) => {
    return new Promise((resolve, reject) => {
      var bytes = CryptoJS.AES.decrypt(data, process.env.REACT_APP_SECRET_KEY);
      var decryptedData = []

      try {
        decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      } catch (error) {
        decryptedData = []
      }

      return resolve(decryptedData);
    });
  };
}

export default service;
