import React, {useEffect, useState} from 'react';
import {useLocation} from 'wouter';
import Repositories from '../../components/Repositories';
import Bookmarks from '../../components/Bookmarks';
import Info from '../../components/Info';
import useRepositories from '../../hooks/useRepository';


export default function MainPage() {
    const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || '');
    const [location, setLocation] = useLocation();
    console.log(user.login)
    const personalRepositories = useRepositories(user.login)
    useEffect(() => {
        if(!user) {
            setLocation('/');
            return;
        }
    });
    const addBookmark = (bookmark) => {
        const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        const data = bookmarks.concat(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(data));
        return data;
    }
    return (
        <div className="container d-flex">
            <section className="col-md-4">
                <Repositories repositoryData={personalRepositories} title="Personal"/>
                <Repositories repositoryData={personalRepositories} title="Proffesional"/>
            </section>
            <section className="col-md-4">
                <Bookmarks addBookmark={addBookmark}/>
            </section>
            <section className="col-md-4">
                <Info />
            </section>
        </div>
    )
}
