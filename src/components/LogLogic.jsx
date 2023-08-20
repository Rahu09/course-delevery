import React, {useEffect} from 'react'
import {userState} from '../store/atoms/users'
import { useSetRecoilState } from 'recoil';


function LogLogic() {

  const setUser = useSetRecoilState(userState);
  const auth = async()=>{
    const res = await localStorage.getItem("auth")
    if(res){
      setUser({
        isLoading: false,
        userLogin: true
      })
    }else{
      setUser({
        isLoading: false,
        userLogin: false
      })
    }
  }

  useEffect(() => {
    auth();
  }, []);

  return <div></div>
}

export default LogLogic