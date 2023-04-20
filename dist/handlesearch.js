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
        rows: filteredRows,
        occureancies: filteredRows,
        keyword
    });
};

module.exports = { handleSearch };
// module.exports = handleSearch;