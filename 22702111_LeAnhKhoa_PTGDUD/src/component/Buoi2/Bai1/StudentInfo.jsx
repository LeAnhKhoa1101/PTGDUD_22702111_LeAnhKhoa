import React from "react";
const StudentInfo = (props) =>{
    return (
        <div className="student-card" style={{
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            margin: '10px 0',
            backgroundColor: 'thistle',
            width: '300px'
        }}>
            <h3 style={{textAlign: 'center'}}>
                Thong tin sinh vien
            </h3>
            <p><strong>
                Ho va ten: </strong>{props.name}</p>
            <p><strong>
                MSSV: </strong>{props.id}</p>
            <p><strong>
                Lop: </strong>{props.className}</p>
        </div>
    )
}
export default StudentInfo;