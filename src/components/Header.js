
import '../css/Header.css';

function Header(){

    const goHome=()=>{
        window.location.href='/'
    }

    const goRegister=()=>{
        window.location.href='/register'
    }

    return(
        <div id='header'>
            <button onClick={goHome}>홈</button>
            <button onClick={goRegister}>회원가입</button>
        </div>
    )
}

export default Header;