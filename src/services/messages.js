import React, {Component} from 'react';

export default class showMessages extends Component{
    constructor(type,message, time = 3000){
        super();
        this.time = time;
        this.type = type;
        this.message = message;
        this.elBody = document.querySelector("body");
    }

    showMessage(){
        const elDiv = document.createElement("div");
        const elSpan = document.createElement("span");
        elSpan.appendChild(document.createTextNode(this.message));
        elDiv.appendChild(elSpan);
        this.elBody.appendChild(elDiv);
        elDiv.setAttribute("class",`shake msg-icone ${this.type}`);
        elDiv.style.opacity = 1;
        setTimeout(()=>{
            setTimeout(()=>{
                elDiv.remove();
            }, this.time);
            elDiv.style.opacity = 0;
        }, this.time);
    }
}