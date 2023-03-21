import React from 'react'
import css from './Header.module.css'

const Header = () => {
    return (
        <>
            <div className={css.container}>
                <div className={css.one}>
                    <img className={css.img} src='https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg'></img></div>
                <div className={css.second}>
                    <div>search</div>
                    <div>button</div>
                    <div>button</div>
                </div>
            </div>
        </>

    )
}

export default Header
