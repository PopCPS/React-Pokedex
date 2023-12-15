import './assets/sideCard.css'

const SidePokemonCard = () => {
    return (
        <section className="side-bar">
            <img className="image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png"></img>
            <h3 className='id'>#321</h3>
            <h2 className='name'>nome</h2>
            <h4>x pokemon</h4>
            <div>
                types
            </div>
            <h2 className='side-card-titles'>POKÉDEX ENTRY</h2>
            <p>desc</p>
            <h2 className='side-card-titles'>ABILITIES</h2>
            <div>
                skills
            </div>
            <div>
                <div>
                    <h2 className='side-card-titles'>HEIGHT</h2>
                    <h2>100</h2>
                </div>
                <div>
                    <h2 className='side-card-titles'>WEIGHT</h2>
                    <h2>100</h2>
                </div>
            </div>
            <div>
                <div>
                    <h2 className='side-card-titles'>WEAKNESSES</h2>
                    <div></div>
                </div>
                <div>
                    <h2 className='side-card-titles'>BASE EXP</h2>
                    <h2>100</h2>
                </div>
            </div>
            <h2 className='side-card-titles'>STATS</h2>
            <div className='stats-row'>
                <div className='stats-block'>
                    <h3 className='stats-HP stats'>HP</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-ATK stats'>ATK</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-DEF stats'>DEF</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-SpA stats'>SpA</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-SpD stats'>SpD</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-SPD stats'>SPD</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
                <div className='stats-block'>
                    <h3 className='stats-TOT stats'>TOT</h3>
                    <h3 className='stats-number'>100</h3>
                </div>
            </div>
        </section>
    )
}

export default SidePokemonCard