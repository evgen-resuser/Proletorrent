import PropTypes from "prop-types";
import "./tab.css"

export default function Tab({filter, data}) {

    function formatBytes(bytes, decimals) {
        if (!+bytes) return '0 Bytes'

        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']

        const i = Math.floor(Math.log(bytes) / Math.log(k))

        return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }

    let files;
    try {
        files = data
            ?.filter(f => f.status === filter || filter === "all")
            .map((file, index) => (
                <tr key={index} className={(index % 2 === 0 ? "row" : "row dark").concat(` ${file.status}`)}>
                    <td>{index+1}</td>
                    <td>{file.name}</td>
                    <td>{formatBytes(file.size, 2)}</td>
                    <td style={{display: "flex", justifyContent: "center"}}>{file.progress}%<progress className={"progress-bar"} value={file.progress} max={100}/></td>
                    <td>{file.status}</td>
                    <td>{file.createdAt}</td>
                </tr>
            ))
    } catch (error) {
        console.log(error)
    }

    return (
        <table>
            <thead>
            <tr>
                <th style={{ width: '5%' }}>№№</th>
                <th style={{ width: '30%' }}>
                    имя файла
                </th>
                <th style={{ width: '10%' }}>
                    размер
                </th>
                <th style={{ width: '25%'}}>
                    прогресс
                </th>
                <th style={{ width: '15%' }}>
                    статус
                </th>
                <th style={{ width: '15%' }}>
                    дата создания
                </th>
            </tr>
            </thead>
            <tbody>{files}</tbody>

        </table>
    );
}

Tab.propTypes = {
    filter: PropTypes.string,
    data: PropTypes.array,
}