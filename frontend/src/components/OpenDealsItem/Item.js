import React from "react";
import { Card } from "./Item.styled";


const CardItem = ({ title, tiket, image, price, id, sold, yieldP, days, width = '261px' }) => {
    return (
        <Card>
            {
           /*<div className="content">
                <div className="column_one">
                    <p>{price} Dhs</p>
                    <p>Tiket - {tiket} Dhs</p>
                </div>

                <div className="column_two">
                    <p>Yield {yieldP}%</p>
                    <p>Days left {days}</p>
                </div>

                <div className="column_two">
                    <p>Sold {sold}%</p>
                </div>
            </div>
    */}
            

            <table>
                <tr>
                    <td>{price} Dhs</td>
                    <td>Yield {yieldP}%</td>
                    <td>Sold {sold}%</td>
                </tr>
                <tr>
                    <td>Tiket - {tiket} Dhs</td>
                    <td>Days left {days}</td>
                </tr>

            </table>



        </Card>


    );

}

export default CardItem;