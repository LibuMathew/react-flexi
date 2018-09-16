import React from 'react';

export default class Flexi extends React.Component {
    state = {};

    constructor(props) {
        super(props);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit) this.props.onSubmit(this.state);
    }

    onChange = (value, key) => {
        this.setState({
            [key]: value
        });
    }

    generateTextField(control) {
        return <input
            className="form-control"
            type="text"
            key={control.name}
            name={control.name}
            value={control.value}
            onChange={(e) => { this.onChange(e.target.value, control.name) }}
        />
    }

    generateDropdown(control) {
        if (control.selected) {
            setTimeout(() => {
                this.setState({
                    [control.name]: control.selected
                });
            });
        }
        let selectOptions = control.values.map((opt) => {
            return (
                <option
                    className="form-input"
                    key={opt}
                    value={opt}
                    selected={control.selected === opt}>
                    {opt}
                </option>
            );
        });

        return <select className="form-control" onChange={(e) => { this.onChange(e.target.value, control.name) }}>{selectOptions}</select>;
    }

    renderForm = () => {
        let config = this.props.config;
        return config.items.map((m) => {
            let name = m.name;
            let input;
            let controlMapper = {
                "TextField": () => input = this.generateTextField(m),
                "DropDown": () => input = this.generateDropdown(m)
            };
            controlMapper[m.type]();
            return (
                <div key={'g' + name} className="form-group">
                    <label className="form-label"
                        key={"l" + name}
                        htmlFor={name}>
                        {m.label}
                    </label>
                    {input}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="p-3">
                <form onSubmit={(e) => { this.onSubmit(e) }}>
                    {this.renderForm()}
                    <div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );
    }
}