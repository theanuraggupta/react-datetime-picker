import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import { useEffect, useState } from 'react';


import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
const dateValue = new Date();
const Dateformat = () => {
    const dataTypes = [
        { value: 'dd-MMM-yy hh:mm a' },
        { value: 'yyyy-MM-dd HH:mm' },
        { value: 'dd-MMMM HH:mm' },
    ];
    const fields = { value: 'value' };
    const waterMark = 'Format';
    const floatLabelType = 'Auto';
    const index = 0;
    const [format, setFormat] = useState('dd-MMM-yy hh:mm a');
    /*Apply selected format to the component*/
    const onChange = (args) => {
        setFormat(args.value);
    };
    return (<div className='control-pane'>
            <div className='control-section row'>
                <div className='col-lg-8'>
                    <div className='datetimepicker-control-section'>
                        <DateTimePickerComponent format={format} value={dateValue}/>
                    </div>
                </div>
                <div id="format" className='col-lg-4 property-section'>
                    <div>
                        <DropDownListComponent id="dateFormats" dataSource={dataTypes} fields={fields} floatLabelType={floatLabelType} index={index} placeholder={waterMark} change={onChange.bind(this)}>
                        </DropDownListComponent>
                    </div>
                </div>
            </div>
        </div>);
};
export default Dateformat;

const root = createRoot(document.getElementById('sample'));
root.render(<Dateformat />);