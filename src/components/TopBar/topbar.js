import React from 'react'
import './topbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function TopBar(props) {
    return (
        <div class="container">
        <ul id="menu" class="col-12 mx-auto p-3">
        <li>Title</li>
        <li>Articles</li>
        <li>Greetings</li>
        </ul>
        </div>
      
    )
}
