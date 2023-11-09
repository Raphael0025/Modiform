import React from 'react'

const ToggleTable = ({data, headers, height='430px', onDelete }) => {
    
    return (
        <div role="table" className='w-100'>
            <TableHeader headers={headers} />
            <TableBody dataContents={data} height={height} onDelete={onDelete} />
        </div>
    )
}

const TableBody = ({dataContents, height }) => {

    return(
        <div className='d-flex flex-column w-100 gap-2 table-container' role='rowgroup' style={{height: height}}>
        {dataContents.map((data, indx) => (
            <div role='row' key={indx} className={`table-row d-flex text-center py-2 rounded-3  `} >
                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                    {data.inv_class}
                </span>
                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                    {data.category}
                </span>
                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                    {data.itm_code}
                </span>
                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                    {data.itm_desc}
                </span>
                <span className='w-100 text-truncate ' style={{fontSize: '12px'}} role='cell'>
                    {data.stock}
                </span>

                
            </div>
        ))}
        </div>
    )
}

const TableHeader = ({headers}) => {
    return (
        <div role='rowgroup'>
            <div role='row' className='d-flex gap-2 header-txt mb-3 p-2 rounded-3' style={{backgroundColor: '#2E3039'}}>
            {headers.map((header, indx) => (
                <span key={indx} role='cell' className='w-100 text-center'>{header}</span>
            ))}
            </div>
        </div>
    )
}
export default ToggleTable