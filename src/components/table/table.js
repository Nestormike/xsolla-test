import React from "react";
import './table.css'

export class Table extends React.Component {
     render() {
         return(
            <table>
                <thead>
                <tr>
                    <td>Имя проекта</td>
                    <td>Способ оплаты</td>
                    <td>Дата перевода</td>
                    <td>Имя пользователя</td>
                    <td>Сумма</td>
                    <td>Валюта</td>
                </tr>
                </thead>

                <tbody>
                {
                    this.props.data.map((tData, index) => 
                        
                        <tr key={index}>
                            <td>{tData.transaction.project.name}</td>
                            <td>{tData.transaction.paymentMethod.name}</td>
                            <td>{new Date(tData.transaction.transferDate).toLocaleString()}</td>
                            <td>{tData.user.name}</td>
                            <td>{tData.paymentDetails.payment.amount}</td>
                            <td>{tData.paymentDetails.payment.currency}</td>
                        </tr>
                        
                    ) 
                }
                </tbody>
            </table>
         )
     }
     
}