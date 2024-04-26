import React, { Component } from 'react'

export default function DashBoard(){
    async function onLogout() {
        // await signOut();
        window.location.href = "/";
      }
    return(
        <div>
            <p>DashBoard Page </p>
            <button onClick={onLogout}>Logout</button>
        </div>
    );
}