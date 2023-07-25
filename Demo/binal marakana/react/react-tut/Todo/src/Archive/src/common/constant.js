export const URL = {
    IMAGE: process.env.REACT_APP_IMAGE_URL,
    SOCKET: process.env.REACT_APP_SOCKET_API_KEY,
    API: process.env.REACT_APP_API_KEY,
}
export const FILE = {
    IMAGES: /\.(svg|png|apng|jpeg|jpg|ico|hdr|bmp|webp|gif|tiff|tif|jp2|rgb|dds|cur|tga|heic|jfif|pgm|jpe|xpm|exr|map|ppm|g3|wbmp|jbg|pcx|pdb|avif|jps|rgba|heif|fax|xbm|yuv|pcd|pict|xwd|pal|vips|pgx|pbm|jbig|picon|ras|pct|fts|hrz|ipl|mng|mtv|otb|palm|pam|pfm|pnm|rgbo|sgi|sun|uyvy|viff|xv|g4|rgf|six|sixel|jif|jfi)$/i,
    VIDEO: /\.(avi|wmv|mpeg|webm|mov|mpg|divx|mpeg-2|3gp|flv|swf|m4v|ogv|mkv|mjpeg|vob|xvid|mts|av1|ts|avchd|hevc|asf|mxf|m2v|3g2|rmvb|m2ts|wtv|f4v|rm|mp4)$/i,
    AUDIO: /\.(mp3|wav|ogg|wma|m4a|flac|mp2|aac|aiff|m4r|amr|ac3|opus|gsm|wve|w64|caf|fssd|vox|dts|amb|txw|au|spx|wv|voc|tta|ra|oga|pvf|prc|maud|8svx|snd|sndr|sndt|avr|cdda|cvs|cvsd|cvu|dvms|vms|fap|paf|sou|gsrt|hcom|htk|ima|ircam|sln|sph|nist|smp|sd2)$/i,
};

export const CONSTANTS = {
    PREMIERE_TIME: 15,
    MOVIE_END_TIME: 5,
    PAGINATION_LIMIT: 20,
    AWARDS_SPONSORS: ['Next Audience', 'U.S. Dramatic', 'U.S. Documentary'],
    AWARDS: ['World Dramatic', 'World Documentary'],
    MAX_LENGTH: 50,
    JOIN_EXPIRES: 180,
    WAITING_ROOM_BUFFER: 5
}

export const COUNTRIES = [ "Select Country", "United States", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "The Democratic Republic of Congo", "Cook Islands", "Costa Rica", "Ivory Coast", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "England", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji Islands", "Finland", "France", "French Guiana", "French Polynesia", "French Southern territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Isle of Man", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "North Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montserrat", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Korea", "Northern Ireland", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Korea", "South Sudan", "Spain", "SriLanka", "Sudan", "Suriname", "Svalbard and Jan Mayen", "Swaziland", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wales", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe", ]

