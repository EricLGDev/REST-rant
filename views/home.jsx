const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pille-r-priske.jpg" alt="Photo of a sandwich taken by Pille R Priske" />
                    <div>
                        Photo by <a href="https://unsplash.com/photos/U0PiIS4Uvkc">Pille R. Priske</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn btn-primary">Places Page</button>
                </a>

            </main>
        </Def>
    )
}

module.exports = home