import './filter-label.scss'

const FilterLabel = ({filterCheckOn, filters, label, clearFilter, isSearch, search}) => {

    return (
        <>
            {
                filterCheckOn && !isSearch &&
                <div className="filter-label">
                    {filters[label].title}
                    <span onClick={() => clearFilter(label)}>x</span>
                </div>
            }
            {
                filterCheckOn && isSearch && search &&
                <div className="filter-label">
                    {search}
                    <span onClick={() => clearFilter('search')}>x</span>
                </div>
            }
        </>
    );
}

export default FilterLabel;