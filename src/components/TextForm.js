import React, { useState } from 'react';
import { sentenceCase } from "sentence-case";

export default function TextForm(props) {
    //new array for regex flags: g, i, m, s, u, y
    const [flags, setFlags] = useState([]);
    const [text, setText] = useState("");
    const [regex, setRegex] = useState("");

    const updateFlags = (flag) => {
        if (flags.includes(flag)) {
            setFlags(flags.filter(f => f !== flag));
        } else {
            setFlags([...flags, flag]);
        }
    };

    const handleChangeRegex = (e) => {
        setRegex(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (!regex) return props.newAlert("Please enter a RegEx pattern", "warning");
        try {
            const pattern = new RegExp(regex, flags.join(""));
            const matches = text.match(pattern);
            props.newAlert(`Found ${matches ? matches.length : 0} matches!`, "info");
        } catch (err) {
            props.newAlert("Invalid RegEx pattern", "danger");
        }
    };

    const handlePaste = async (e) => {
        e.preventDefault();
        try {
            const clipText = text + (await navigator.clipboard.readText());
            setText(clipText);
            props.newAlert("Text appended from clipboard!", "success");
        } catch (err) {
            props.newAlert("Please allow clipboard access.", "danger");
        }
    };

    const toSentenceCase = (e) => {
        e.preventDefault();
        setText(sentenceCase(text));
        props.newAlert("Converted to Sentence Case!", "success");
    };

    const handleUpClick = (e) => {
        e.preventDefault();
        setText(text.toUpperCase());
        props.newAlert("Converted to Uppercase!", "success");
    };

    const handleLowClick = (e) => {
        e.preventDefault();
        setText(text.toLowerCase());
        props.newAlert("Converted to Lowercase!", "success");
    };

    const handleCEWClick = (e) => {
        e.preventDefault();
        const capitalizedText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
        setText(capitalizedText);
        props.newAlert("Words Capitalized!", "success");
    };

    const handleToggleCharsCase = (e) => {
        e.preventDefault();
        let updated = text.split("").map(char =>
            char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
        ).join("");
        setText(updated);
        props.newAlert("Case Toggled!", "success");
    };

    const handleCopyClick = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        props.newAlert("Copied to clipboard!", "success");
    };

    const handleClear = (e) => {
        e.preventDefault();
        setText("");
        props.newAlert("Text cleared!", "success");
    };

    const handleExtraSpaces = (e) => {
        e.preventDefault();
        setText(text.split(/[ ]+/).join(" "));
        props.newAlert("Extra spaces removed!", "success");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div style={props.themeStyle}>
            <div className="container">
                <h1>{props.head}</h1>
                <textarea
                    className="form-control mb-3"
                    style={{ backgroundColor: props.themeStyle.backgroundColor, color: props.themeStyle.color }}
                    onChange={handleChange}
                    placeholder={props.phText}
                    value={text}
                    id="myBox"
                    rows="8"
                ></textarea>

                {/* Main Utility Buttons */}
                <div className="d-flex flex-wrap align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle mx-1 my-1" type="button" data-bs-toggle="dropdown">
                            Aa
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" onClick={handleUpClick}>UPPERCASE</button></li>
                            <li><button className="dropdown-item" onClick={handleLowClick}>lowercase</button></li>
                            <li><button className="dropdown-item" onClick={handleCEWClick}>Capitalize Words</button></li>
                            <li><button className="dropdown-item" onClick={handleToggleCharsCase}>tOGGLE cASE</button></li>
                            <li><button className="dropdown-item" onClick={toSentenceCase}>Sentence case</button></li>
                        </ul>
                    </div>
                    <button className="btn btn-primary mx-1 my-1" title="Remove Extra Spaces" onClick={handleExtraSpaces}><i className="bi bi-arrows"></i></button>
                    <button className="btn btn-danger mx-1 my-1" title="Clear" onClick={handleClear}><i className="bi bi-trash-fill"></i></button>
                    <button className="btn btn-success mx-1 my-1" title="Copy" onClick={handleCopyClick}><i className="bi bi-clipboard-fill"></i></button>
                    <button className="btn btn-secondary mx-1 my-1" title="Paste" onClick={handlePaste}><i className="bi bi-clipboard-data-fill"></i></button>
                </div>
            </div>

            <div className="container my-3">
                <p>
                    {text.split(/\s+/).filter((el) => el.length !== 0).length} words and {text.length} characters |
                    {" "}{(0.008 * text.split(/\s+/).filter((el) => el.length !== 0).length).toFixed(2)} Minutes read
                </p>
            </div>

            {/* RegEx Section */}
            <div className="container border p-3 rounded">
                <h3>RegEx Toolkit</h3>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        style={{ backgroundColor: props.themeStyle.backgroundColor, color: props.themeStyle.color }}
                        value={regex}
                        onChange={handleChangeRegex}
                        placeholder="Enter RegEx Pattern (e.g. [0-9]+)"
                    />
                    <button className="btn btn-outline-success" onClick={handleSearch}>Search</button>
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">Flags</button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" onClick={() => updateFlags("g")}>Global (g)</button></li>
                        <li><button className="dropdown-item" onClick={() => updateFlags("i")}>Case Insensitive (i)</button></li>
                        <li><button className="dropdown-item" onClick={() => updateFlags("m")}>Multiline (m)</button></li>
                        <li><button className="dropdown-item" onClick={() => updateFlags("s")}>Dot All (s)</button></li>
                        <li><button className="dropdown-item" onClick={() => updateFlags("u")}>Unicode (u)</button></li>
                        <li><button className="dropdown-item" onClick={() => updateFlags("y")}>Sticky (y)</button></li>
                    </ul>
                </div>
                <p className="small mt-1">
                    <strong>Active Flags:</strong> {flags.length > 0 ? flags.join(", ") : "None"}
                </p>
                <p><strong>Note: do not use / before and after your RegEx pattern</strong></p>
            </div>
        </div>
    );
}