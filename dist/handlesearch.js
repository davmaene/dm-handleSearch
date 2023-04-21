const { __ } = require("./configs");
const handleSearch = async ({ rows, keyword, columns, cb }) => {
    // par David Maene une belle fonction de recherche dans un tableau 😃
    const filteredRows = rows.filter((row, i) => {
        try {
            return columns.some((column) =>
                row[column].toLowerCase().includes(keyword.toLowerCase()))
                ? row
                : null;
        } catch (error) {
            return null;
        }
    });

    return cb({
        length: filteredRows['length'],
        input: rows,
        output: filteredRows,
        rows: filteredRows,
        occureancies: filteredRows,
        keyword
    });
};

const asyncSearch = async ({ rows, keyword, columns }) => {
    const filteredRows = rows.filter((row, i) => {
        try {
            return columns.some((column) =>
                row[column].toLowerCase().includes(keyword.toLowerCase()))
                ? row
                : null;
        } catch (error) {
            return new Promise((null, (e) => error))
        }
    });

    return new Promise((resolved, rejected) => {
        resolved({
            length: filteredRows['length'],
            rows: filteredRows,
            occureancies: filteredRows,
            keyword
        });
        rejected(null);
    })
};

module.exports = { handleSearch, asyncSearch };
