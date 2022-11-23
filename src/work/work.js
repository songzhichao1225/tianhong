import './work.css'
import React from 'react';
import { Button } from 'antd'
import { useEffect, useState,useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WorkBro from '../workBro/workBro'

const Work = () => {
    const [obj, setObj] = useState(0)
    const [num, setNum] = useState(0)
    let [isChild, setChild] = useState(false);
    const dispatch = useDispatch()
    useEffect(() => {
    }, [])
    const play = useSelector(state => state.homeActiveSubroute)
    console.log(play)
    function upDate() {
        dispatch({ type: 'COUNT_work', value:false })
        setNum(Math.random())
    }
    

     const upDate2=()=>{
        setNum(Math.random())
     }
  
  

    
  
    return (
        
        <div>
            {play}
            <WorkBro  isChild={isChild} name={num}  />
            <Button onClick={upDate}>增加</Button>
            <button onClick={() => setChild(!isChild)}>改变Child</button>
        </div>

    )



}


// class Work extends React.Component {
    
     

//     state = {
//       home:1
//     };

//   componentDidMount(){
   
//   }

//     hood=()=>{
//         let arr=[1,3,4,5,6,2,7,8,3]
//         console.log(arr.values() )
//         this.setState({
//             home:3
//         },()=>{console.log(343)})
        
//         this.props.loodf(this.state.home)
//         console.log(7)
//         // setTimeout(()=>{
//         //     this.setState({home:2})
//         // console.log(this.state.home)
//         // this.setState({home:3})
//         // console.log(this.state.home)
//         // this.setState({home:4})
//         // console.log(this.state.home)
//         // })
        
//         // this.setState({home:2})
//         // console.log(this.state.home)
//         // this.setState({home:3})
//         // console.log(this.state.home)
//         // this.setState({home:4})
//         // console.log(this.state.home)
//     }
  
   
  
//     render() {
//         console.log(8)
//       return (
//       <div onClick={this.hood}>{this.state.home}</div>
//       )
//     }
//   }
  




export default Work