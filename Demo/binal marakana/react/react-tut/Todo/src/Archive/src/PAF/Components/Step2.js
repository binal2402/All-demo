import React, { useState } from 'react';
// Layouts
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
// PAF Header
import FormHeader from "../../PAF/Components/FormHeader";
//close button
import { IoMdClose } from "react-icons/io"
import FormFooter from './FormFooter';
import FullName from './FullName';
import PlusFieldIcon from '../../icons/PlusFieldIcon';
import RemoveFieldIcon from '../../icons/RemoveFieldIcon';
import Popup from './Popup';
import Dropdown from '../../components/Dropdown';
import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import service from '../../common/service';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AddCredit = () => {
    const ProjectGetDetail = useSelector(e => e.projectGetDetail);
    debugger
    return (
        <div className='addcredit_form'>
            <Dropdown options={ProjectGetDetail.filmcreditLabels} creditOption={true} />
            <div className='addcredit'>
                <FullName />
                <div className="sd_flex add_remove_icon">
                    <span><PlusFieldIcon /></span>
                    {/* <span><RemoveFieldIcon /></span> */}
                </div>
            </div>
        </div>
    )
}
const EditCredit = () => {
    return (
        <div className='addcredit_form'>
            <Dropdown options={['Editor']} />
            <div className='addcredit'>
                <FullName />
                <div className="sd_flex add_remove_icon">
                    {/* <span><PlusFieldIcon /></span> */}
                    <span><RemoveFieldIcon /></span>
                </div>
            </div>
            <div className='addcredit'>
                <FullName />
                <div className="sd_flex add_remove_icon">
                    <span><PlusFieldIcon /></span>
                    <span><RemoveFieldIcon /></span>
                </div>
            </div>
        </div>
    )
}

const Step2 = () => {
    const [addCredit, setAddCredit] = useState(false)
    const [editCredit, setEditCredit] = useState(false)
    const ProjectInfo = useSelector(e => e.ProjectInfo);
    // const dispatch = useDispatch();
    // const history = useHistory()
    const ProjectGetDetail = useSelector(e => e.projectGetDetail);
    // const apiServe = new service();
    // const [, updateState] = React.useState();
    // const forceUpdate = React.useCallback(() => updateState({}), []);
    const [formTwo] = useState({
        credits: ProjectInfo.credits
    })


    const getCredit = (CREDIT_TYPE) => {
        const creditIndex = ProjectGetDetail.filmcreditLabels.findIndex(_ => _.name === CREDIT_TYPE)
        // let ADD_LIMIT = CREDIT_TYPE === 'Director' ? 4 : CREDIT_TYPE === 'Cast' ? 6 : 3
        return formTwo.credits.map((item, i) => {
            return (
                <>
                    {item.creditId === ProjectGetDetail.filmcreditLabels[creditIndex]._id ?
                        item.creditType.map((credit, i) => {
                            return (
                                <>
                                    <p>{credit.firstName} {credit.middleName} {credit.lastName}</p>
                                </>
                            )
                        })
                        : ''}
                </>)
        })
    }



    const onDragEnd = (result) => {
        const { destination, source } = result;
        const oldIndex = source.index;
        const newIndex = destination.index;
        console.log('hello');
        // const arr = [...this.state.venueList];
        // arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
        // const updateArr = [];
        // arr.forEach(({ _id }, i) => {
        //     updateArr.push({
        //         venueId: _id,
        //         sortIndex: i + 1,
        //     });
        // });

        // const data = { order: updateArr };

        // this.setState({ isDraggable: true });
        // this.setState({ venueList: arr });
    }

    const getCreditLabel = (ID) => {

        console.log(ID);
        const creditIndex = ProjectGetDetail.filmcreditLabels.findIndex(_ => _._id === ID)
        return ProjectGetDetail.filmcreditLabels[creditIndex].name
    }

    return (
        <>
            <div className='step2'>
                <Header />
                <FormHeader />
                <div className='container'>
                    {/* <div className='underline'></div> */}
                    <div className='underline'>
                        <div className='step'>
                            <div className='step_no'>
                                <p>Step 2</p>
                            </div>
                            <div className='step_des'>
                                <p>After you submit, you cannot return to this form to make changes. For change requests, email your dedicated Artist Relations Liaison and Festival Publicist.</p>

                                <p>Publicity and marketing materials will be provided to third-party groups, may be used on all Sundance Institute websites, blogs, and print publications before and after the Festival, and will be placed in the Sundance Institute Archives.</p>
                            </div>
                        </div>
                    </div>
                    <div className='underline'>
                        <div className='credits'>
                            <div className='inner_title'>
                                <p>Credits from Step 1 - Included in all publications.</p>
                            </div>
                            <div className='credit sd_flex'>
                                <div className='dest'>
                                    Director
                                </div>
                                <div className='details'>
                                    {getCredit('Director')}
                                </div>
                            </div>
                            <div className='credit sd_flex'>
                                <div className='dest'>
                                    Screenwriter
                                </div>
                                <div className='details'>
                                    {getCredit('Screenwriter')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='underline'>
                        <div className='additional'>
                            <div className='inner_title'>
                                <p>Additional Credits</p>
                            </div>
                            <div className='des'>
                                <div className="add_des">
                                    For your convenience, any Producers entered in Step 1 have been included here and may be edited and reordered. They apply to the total number of additional credits allowed - which is 10 credit titles with a total of 24 individuals' names.
                                </div>
                                <div className='name_count'>Name Count 9/24</div>
                            </div>
                            <div className='for_table'>
                                <Popup title='Edit Additional Credit' open={editCredit} setOpen={setEditCredit}>
                                    <EditCredit />
                                </Popup>
                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided, snapshot) => (
                                            <table  {...provided.droppableProps} ref={provided.innerRef}>
                                                <tbody>
                                                    {formTwo.credits.map((item, i) => {
                                                        if (getCreditLabel(item.creditId) === 'Director' || getCreditLabel(item.creditId) === 'Screenwriter' || getCreditLabel(item.creditId) === 'Cast') {

                                                        } else {
                                                            return (
                                                                <Draggable key={item._id} draggableId={item._id} index={i}>
                                                                    {(provided, snapshot) => (
                                                                        <>
                                                                            <tr ref={provided.innerRef}>
                                                                                <td onClick={() => setEditCredit(true)}>EDIT</td>
                                                                                <td className='dest'>{getCreditLabel(item.creditId)}</td>
                                                                                <td className='details'>{item.creditType.map((credit, i) => (
                                                                                    <p key={credit._id}>{credit.firstName} {credit.middleName} {credit.lastName}</p>
                                                                                ))}</td>
                                                                                <td><div className='close_icon'><IoMdClose /></div></td>
                                                                                <td><img src="/images/dragger.png" alt='drag' /></td>
                                                                            </tr>
                                                                        </>
                                                                    )}
                                                                </Draggable>
                                                            )
                                                        }
                                                    })}
                                                </tbody>
                                            </table>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </div>
                            <div className='add_credit'>
                                <div className='icon'><PlusFieldIcon onClick={() => setAddCredit(true)} /></div>
                                <Popup title='Add Additional Credit' open={addCredit} setOpen={setAddCredit} >
                                    <AddCredit />
                                </Popup>
                                <div className='text'>Add additional Credit Type</div>
                            </div>
                        </div>
                    </div>
                    <div className='underline change_margin'>
                        <div className='principal'>
                            <div className='inner_title'>
                                <p>Principal Cast Member(s)</p>
                            </div>
                            <div className='des'>
                                <div className="add_des">
                                    This credit, entered in Step 1, is displayed below Additional Credits in all publications
                                </div>
                            </div>
                            <div className='credit sd_flex'>
                                <div className='dest'>
                                    Cast
                                </div>
                                <div className='details'>
                                    {getCredit('Cast')}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='footer'>
                        <FormFooter />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Step2
