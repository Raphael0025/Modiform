import React from 'react'

const Table = ({data, headers, subHeader, height="300px"}) => {
    
    return (
        <div role="table" className='accordion' id='tableAccordion'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} subHeader={subHeader} height={height} />
        </div>
    )
}

const TableBody = ({ dataContents, height, subHeader }) => {
    
    return (
        <div className='d-flex flex-column gap-2 table-container' role='rowgroup' style={{ height: height }}>
            {dataContents.map((data, indx) => (
            <div role='row' key={indx} className='rounded-3 accordion-item text-light' style={{color: 'var(--white)', border: '1px solid var(--dark-blue)',backgroundColor: 'var(--light-black)'}}>
                <h4 className={`accordion-header rounded-3 `}>
                <button className='btn w-100 d-flex gap-2 align-items-center text-light py-2 collapsed' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${data.id}`} aria-expanded='false' aria-controls={`collapse${data.id}`}>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.id}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.date}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.user_id}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.user_name}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.items}</span>
                    <span className='w-100 text-truncate' style={{ fontSize: '12px' }} role='cell' >{data.total_amt}</span>
                    <span className='w-100 text-truncate rounded-4 bg-info py-1' style={{ fontSize: '12px' }} role='cell' >{data.status}</span>
                </button>
                </h4>
                <div id={`collapse${data.id}`} className='accordion-collapse collapse' data-bs-parent='#tableAccordion'>
                <div className='accordion-body d-flex gap-3 py-2' style={{ fontSize: '10px', backgroundColor: '#142D3F' }}>
                    <div className='w-100'>
                        <div className='d-flex gap-2 align-items-center'>
                            <p className='fw-bolder m-0 header-txt'>Items</p>
                            <hr className='w-100 my-2' />
                        </div>
                        <div className='d-flex align-items-center gap-2 text-center' style={{color: '#ffffff60'}}>
                            {subHeader.map((header, indx) => (
                                <span className='w-100' key={indx}>{header}</span>
                            ))}
                        </div>
                        {data.item.map((itm, i) => (
                            <div className='d-flex align-items-center gap-2 text-center py-1' key={i}>
                                {Object.entries(itm).map(([key, value], indx) => (
                                    <span className='w-100 text-truncate' key={indx} >{value}</span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        );
    }

const TableHeader = ({headers}) => {
    return (
        <div role='rowgroup'>
            <div role='row' className='d-flex gap-2 header-txt mb-3 px-3'>
            {headers.map((header, indx) => (
                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default Table