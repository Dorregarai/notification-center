import React from "react";
import './style.css';

class Pagination extends React.Component{
    render(){
        return(
            <div className="pagination">
                <ul className="paginationMenu">
                    <li>«‎</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>»‎</li>
                </ul>
            </div>
        )
    }
}
export default Pagination;

/*
* class Paginator {
 constructor() {
 this.currentPage = 0;
 this.minimalPage = 0;
 this.maximalPage = 0;
 this.itemsPerPage = 0;
 }

 pageLeft = () => {
 if (this.currentPage > this.minimalPage) {
 this.currentPage -= 1;
 }
 }

 pageRight = () => {
 if (this.currentPage < this.maximalPage) {
 this.currentPage += 1;
 }
 }

 pageStart = () => {
 this.currentPage = this.minimalPage;
 }

 pageEnd = () => {
 this.currentPage = this.maximalPage;
 }

 updateMaximalPage = itemsCount => {
 this.maximalPage = Math.ceil(itemsCount / this.itemsPerPage) - 1;
 }
 }

 export default Paginator;
* */