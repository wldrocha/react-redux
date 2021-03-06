import React from "react";
const CreditCard = ({id,name, phone, company})=>{

return (
  <div id="modal" className="modal">
      <div className="modalbox movedown">
          <div>
              <div className="modal__header">
                  <button className="close__modal">&#10006;</button>
              </div>
              <div className="modal__body">
                  <form action="">
                      <input className="modal__input" type="text" name="name" id="name" placeholder="name"/>
                      <input className="modal__input" type="email" name="email" id="email" placeholder="E-mail"/>
                      <div className="modal__footer">
                          <button className="button button--modal">Send</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
  </div>
)
}