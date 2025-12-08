interface Props {
    searches: string[];

    onLabelClick: (term: string) => void;
}

export function PreviousSearches({searches, onLabelClick}: Props) {
    return (
        <div className="previous-searches">
            <h2>Busquedad previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((search) => (
                        <li
                            key={search}
                            onClick={ () => onLabelClick(search) }>
                            {search}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
