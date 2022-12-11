import React, { useState,useRef } from 'react';
import '../css/Register.css';
import PopUpDom from './PopUpDom.js';
import PopUpPostCode from './PopUpPostCode.js';
function Register(){
	// 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const inputAddressRef = useRef(null);
    const inputZoneCodeRef = useRef(null);

	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }

    const getAddress=(fullAddress,zonecode)=>{
        console.log('회원가입창에서 확인!')
        console.log(fullAddress)
        console.log(zonecode)

        inputAddressRef.current.value=fullAddress
        inputAddressRef.current.disabled=true

        inputZoneCodeRef.current.value=zonecode
        inputZoneCodeRef.current.disabled=true
    }

    return(
        <div id='register'>
            <button type='button' onClick={openPostCode}>우편번호 검색</button> <br/>
            <input type='text' placeholder='주소' ref={inputAddressRef}/> <br/>
            <input type='text' placeholder='우편번호' ref={inputZoneCodeRef}/>
            
            <div id='PopUpDom'>
                {isPopupOpen && (
                    <PopUpDom>
                        <PopUpPostCode onClose={closePostCode} getAddress={getAddress}/>
                    </PopUpDom>
                )}
            </div>
        </div>
    )
}

export default Register;