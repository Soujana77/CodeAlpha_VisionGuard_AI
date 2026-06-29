import {
  FiSearch,
  FiCalendar,
  FiFilter,
  FiRefreshCw,
} from "react-icons/fi";

function ReportsToolbar({
  search,
  setSearch,
  source,
  setSource,
  date,
  setDate,
  refresh,
}) {
  return (
    <div className="reports-toolbar">

      <div className="toolbar-search">

        <FiSearch />

        <input
          type="text"
          placeholder="Search Report ID..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      <div className="toolbar-filter">

        <FiFilter />

        <select
          value={source}
          onChange={(e) =>
            setSource(e.target.value)
          }
        >

          <option value="">
            All Sources
          </option>

          <option value="Image">
            Image Upload
          </option>

          <option value="Live">
            Live Detection
          </option>

        </select>

      </div>

      <div className="toolbar-date">

        <FiCalendar />

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

      </div>

      <button
        className="refresh-btn"
        onClick={refresh}
      >

        <FiRefreshCw />

        Refresh

      </button>

    </div>
  );
}

export default ReportsToolbar;