import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';



function Items({ currentItems, setUpdate }) {
    const like=(item)=>{
        setUpdate(false);
       dislike(item);
            let l= JSON.parse(localStorage.getItem("liked"));
   
        
        l.push(item);
        localStorage.setItem("liked",JSON.stringify(l));
        
    }
    const liked=(item)=>{
        setUpdate(false);
        let l= JSON.parse(localStorage.getItem("liked"));
        for (let index = 0; index < l.length; index++) {
            const element = l[index];
            if(element.name===item.name){
                return true;
            }
            
        }
        return false;
    }

    const dislike=(ob)=>{
        setUpdate(false);
        let l = JSON.parse(localStorage.getItem("liked")).filter(function(item) {
            return item.name !== ob.name 
        });
        localStorage.setItem("liked",JSON.stringify(l));
    }
    return (
        <>
        <ul className="list-group text-start mb-3">
        {currentItems &&
            currentItems.map((item) => (
                
                <li className="list-group-item d-flex justify-content-between align-items-center">
                {item.name }
                
                {
                    liked(item) && 
                    <button className="btn mb-2 btn-secondary" onClick={()=>{dislike(item); setUpdate(true)}}>Dislike</button>
                }
                {
                    !liked(item) && 
                    <button className="btn mb-2 btn-secondary" onClick={()=>{like(item); setUpdate(true)}}>Like</button>
                }
                
                </li>
                
                ))}
                </ul>
                </>
                );
            }
            
            function Pagination({ itemsPerPage, items }) {
                // We start with an empty list of items.
                const [currentItems, setCurrentItems] = useState(null);
                const [pageCount, setPageCount] = useState(0);
                // Here we use item offsets; we could also use page offsets
                // following the API or data you're working with.
                const [itemOffset, setItemOffset] = useState(0);
                const [update, setUpdate]= useState(false);
                
                useEffect(() => {
                    // Fetch items from another resources.
                    const endOffset = itemOffset + itemsPerPage;
                    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
                    setCurrentItems(items.slice(itemOffset, endOffset));
                    setPageCount(Math.ceil(items.length / itemsPerPage));
                    
                }, [itemOffset, itemsPerPage, update, setUpdate]);
                
                // Invoke when user click to request another page.
                const handlePageClick = (event) => {
                    const newOffset = (event.selected * itemsPerPage) % items.length;
                    console.log(
                        `User requested page number ${event.selected}, which is offset ${newOffset}`
                        );
                        setItemOffset(newOffset);
                    };
                    
                    return (
                        <div className="text-center">
                        <Items setUpdate={setUpdate} currentItems={currentItems} />
                        <ReactPaginate
                        className="pagination"
                        nextClassName="page-item"
                        previousClassName="page-item"
                        nextLinkClassName="page-link"
                        previousLinkClassName="page-link"
                        pageLinkClassName="page-link"
                        activeLinkClassName="page-item active"
                        containerClassName="pagination"
                        nextLabel="Next"
                        
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={2}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        renderOnZeroPageCount={null}
                        />
                        </div>
                        );
                    }
                    export default Pagination;