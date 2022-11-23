
import './App.css';
import { Layout, Menu,Button } from 'antd'
import { Routes, Route, useNavigate,useLocation } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Work from './work/work'
import WorkBro from './workBro/workBro';
import { useState,useEffect } from 'react';

const { Header, Content, Footer, Sider} = Layout


function App() {
  const items=[
    {label:'home',key:'/'},
    {label:'name',key:'/name'},
    {label:'work',key:'/work'},
    {label:'workBro',key:'/workBro'}
  ]
  const [ko,setKo]=useState({a:1,b:2})
  const hash = useLocation()
  const turn = useNavigate()
 
   function selectMenu(e){
     turn(e.key)
   }

   function lood(e){
    console.log(e)
  
   }

  return (
    <Provider store={store}>
        <Layout  style={{minHeight:'100vh'}}>
          <Sider >
            <div className='logo'></div>
            <Menu defaultSelectedKeys={hash.pathname}  theme="dark" onSelect={selectMenu} items={items}></Menu>
          </Sider>
          <Layout>
            <Header style={{backgroundColor:'#fff'}}></Header>
            <Content style={{
            margin: '0 16px',
          }}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/name" element={<Name />}></Route>
              <Route path="/work" element={<Work ko={ko}  loodf={lood}/>}></Route>
              <Route path='/workBro' element={<WorkBro/>}></Route>
            
            </Routes>
          </Content>
          <Footer></Footer>
          </Layout>
          

        </Layout>






    </Provider>
  );
}

function Home() {

  return (
    <div>这是home</div>
  )
}

function Name() {

    function ko(fn,wait){
      let timer=null
      return function(){
           clearTimeout(timer)
           timer=setTimeout(()=>{
            fn()
           },wait)
      }

    }

     function fang(){
       console.log('请求一下')
     }

  return (
    <div>这是Name
      <Button onClick={ko(fang,2000)}>click</Button>
    </div>
  )
}

export default App;
