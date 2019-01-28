import React from 'react';
import Option from './Option';
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3> 
            <button 
                onClick={props.handleDeleteOptions} 
                className="button button--link"
            >
                Remove All
            </button>
        </div>
        <div>
            {props.opts.length ? '': <p className="widget__body">Please add an option to get started</p>}
        </div>
        {props.opts.map((option, index) => (
                <Option
                    count={index+1} 
                    key={option}  
                    text={option}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        
    </div>
)


export default Options;