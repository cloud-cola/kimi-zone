import { useEffect, useState } from 'react'
import { home } from '../../api'
import './index.less'

const Home = () => {
    const kimi = () => {
        const params = {
            page: 3,
            num: 5
        }
        home(params)
            .then((e) => {
                console.log('e', e.data)
            })
            .catch((error) => {
                console.log('error', error)
            })
    }
    useEffect(() => {
        kimi()
    }, []);

    return (
        <div className="App">
            <div className='kimi-header'>
                <div className='kimi-header-nav'>
                    <div className='kimi-header-nav_home'>首页 | </div>
                    <div className='kimi-header-nav_about'>| 关于我 | </div>
                    <div className='kimi-header-nav_life'>| 时光相册</div>
                </div>
                <div className='kimi-header-account'>登录|注册</div>
            </div>
            <div className='kimi-body'>body</div>
            <div className='kimi-footer'>CopyRight - KiMi空间</div>
        </div>
    )
}

export default Home
