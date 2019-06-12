import React from "react";
import './style.css';

class Pagination extends React.Component {
    renderPaginationItem(textToDisplay, pageNumber, key) {
        return (
            <li key={key} className="pagination__page-item">
                <a
                    className='pagination__page-link'
                    onClick={() => this.props.getNotifications(
                        pageNumber,
                        this.props.filterIsRead(),
                        this.props.filterCategory()
                    )}
                >
                    {textToDisplay}
                </a>
            </li>
        )
    }

    renderPagination = () => {
        const { page, pagesCount } = this.props;
        const pages = [];
        if (+page !== 1) {
            pages.push(this.renderPaginationItem('<', +page - 1, '<'))
        }

        pages.push(this.renderPaginationItem(1, 1, 'first'));

        if (+page - 3 > 1){
            pages.push(this.renderPaginationItem('...', '', 'leftDots'))
        }

        const pagesToDisplay = [+page - 2, +page - 1, +page, +page + 1, +page + 2];
        const minPages = pagesToDisplay.filter(pageNumber => pageNumber > 1 && pageNumber < pagesCount);
        const maxPages = pagesToDisplay.filter(pageNumber => pageNumber < pagesCount && pageNumber > 1);
        const minPage = Math.min(...minPages);
        const maxPage = Math.max(...maxPages);

        for (let i = minPage; i <= maxPage; i++){
            pages.push(this.renderPaginationItem(i, i, i));
        }

        if (+page + 3 < pagesCount){
            pages.push(this.renderPaginationItem('...', '', 'rightDots'))
        }

        pages.push(this.renderPaginationItem(pagesCount, pagesCount, pagesCount));

        if (+page !== pagesCount) {
            pages.push(this.renderPaginationItem('>', +page + 1, '>'));
        }

        return pages;
    };

    render(){
        return(
            <ul className="pagination">
                {
                    this.renderPagination()
                }
            </ul>
        )
    }
}

export default Pagination;