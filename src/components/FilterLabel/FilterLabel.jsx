import './filter-label.scss';
import CloseIcon from '@mui/icons-material/Close';

const FilterLabel = ({filterCheckOn, filters, label, clearFilter, isSearch, search}) => {

    return (
        <>
            {
                filterCheckOn && !isSearch &&
                <div className="filter-label">
                    {filters[label].title}
                    <span onClick={() => clearFilter(label)}><CloseIcon/></span>
                </div>
            }
            {
                filterCheckOn && isSearch && search &&
                <div className="filter-label">
                    {search}
                    <span onClick={() => clearFilter('search')}><CloseIcon/></span>
                </div>
            }
        </>
    );
}

export default FilterLabel;