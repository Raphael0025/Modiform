import React, {useState} from 'react'
import {IconPark} from 'Assets/SvgIcons'
import {iconPath} from 'Utils/handlingFunction'

const ToggleTable = ({data, headers, height='430px', onCheckboxCheck, onDelete }) => {
    const initialCheckedItems = data.filter((item) => item.publish).map((item) => item.itm_code);
    const [checkedItems, setCheckedItems] = useState(initialCheckedItems);

    const handleCheckboxChange = (itmCode) => {
        const updatedCheckedItems = checkedItems.includes(itmCode)
        ? checkedItems.filter((code) => code !== itmCode)
        : [...checkedItems, itmCode];
        setCheckedItems(updatedCheckedItems);
        onCheckboxCheck(updatedCheckedItems); // Invoke the callback function with updated checked items
    };

    return (
        <div role="table" className='w-100'>
            <TableHeader headers={headers} />
            <TableBody
                dataContents={data}
                height={height}
                onDelete={onDelete}
                onCheckboxChange={handleCheckboxChange}
                checkedItems={checkedItems}
            />
        </div>
    )
}

const TableBody = ({dataContents, height, onDelete, onCheckboxChange, checkedItems }) => {

    return(
        <div className='d-flex flex-column w-100 gap-2 table-container' role='rowgroup' style={{height: height}}>
        {dataContents.map((data, indx) => (
            <div role='row' key={indx} className={`table-row d-flex align-items-center text-center py-2 rounded-3  `} >
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

                <span
                    className='w-100 text-truncate rounded-4 py-2'
                    style={{ fontSize: '12px', backgroundColor: `${checkedItems.includes(data.itm_code) ? 'green' : 'red'}` }}
                    role='cell'
                >
                    {checkedItems.includes(data.itm_code) ? 'Selling' : 'Stored'}
                </span>

                <span className='w-100 text-truncate' style={{fontSize: '12px'}} role='cell'>
                    <button className='btn text-light'>
                        <IconPark path={iconPath('', 'messages', 'heroicons:magnifying-glass-plus-20-solid', 'heroicons:magnifying-glass-plus-20-solid')} size={20} />
                    </button>
                </span>

                <span className='w-100 p-0 form-switch' style={{ fontSize: '12px' }} role='cell'>
                    <input
                    type={'checkbox'}
                    role='switch'
                    className={`form-check-input py-2 px-3 ${checkedItems.includes(data.itm_code) ? 'bg-success' : 'bg-danger'}`}
                    checked={checkedItems.includes(data.itm_code)}
                    onChange={() => onCheckboxChange(data.itm_code)}
                    />
                </span>

                <span className='w-100' style={{fontSize: '12px'}} role='cell'>
                    <button className='btn btn-sm text-light'>  
                        <IconPark path={iconPath('', 'messages', 'akar-icons:edit', 'akar-icons:edit')} size={20} />
                    </button>
                    <button className='btn btn-sm text-light' onClick={() => onDelete(data)}>  
                        <IconPark path={iconPath('', 'messages', 'mdi:trash-can-outline', 'mdi:trash-can-outline')} size={20} />
                    </button>
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