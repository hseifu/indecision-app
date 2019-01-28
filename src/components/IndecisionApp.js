import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
        return 
    }
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid data to enter'
        }
        else if (this.state.options.indexOf(option) > -1){
            return 'Option already exists'
        }
        this.setState((prevState) => ({options: prevState.options.concat([option])}))
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option != optionToRemove)
        }))
    }
    handleClearPickedOption = () => {
        this.setState(() => ({selectedOption: undefined}))
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({options}))
            }
        }
        catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={!this.state.options.length}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            opts={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearPickedOption={this.handleClearPickedOption}
                />
            </div>
        )
    }
}

export default IndecisionApp;