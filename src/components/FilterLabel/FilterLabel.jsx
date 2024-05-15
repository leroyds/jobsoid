import './filter-label.scss'

const FilterLabel = ({filterCheckOn, filters, label, clearFilter}) => {

    return (
        <>
            {
                filterCheckOn &&
                <div className="filter-label">
                    {filters[label].title}
                    <span onClick={() => clearFilter(label)}>x</span>
                </div>
            }
        </>
    );
}

export default FilterLabel;