import React from "react"

import Layout from '../components/site-chrome/layout'
import SEO from '../components/site-chrome/seo'

import BadDropdown from '../components/bad/dropdown'
import GoodDropdown from '../components/good/dropdown'

const DropdownPage = () => (
  <Layout>
    <SEO title="Dropdown" keywords={['javascript', 'accessibility', 'react']} />
    <div>
      <h2>Dropdowns</h2>
      <p>Tuck controls into an expandible, collapsible, accessible menu. Consider, however, whether you really need a dropdown.</p>
      <p>Keyboard interactions will depend on what's in the menu. List of links? The TAB key is fine.<br />UI actions with a button or radio buttons? Script the arrow keys.</p>

      <section className="two-col">
        <div>
          <h3>Link list dropdown 1</h3>
          <BadDropdown activatorText="About" items={[{
            text: 'Overview',
            url: '#'
          },{
            text: 'Our team',
            url: '#'
          },{
            text: 'Careers',
            url: '#'
          }]} />
        </div>
        <div>
          <h3>Link list dropdown 2</h3>
          <GoodDropdown activatorText="About" items={[{
            text: 'Overview',
            url: '#'
          },{
            text: 'Our team',
            url: '#'
          },{
            text: 'Careers',
            url: '#'
          }]} />
        </div>
      </section>
    </div>
  </Layout>
)

export default DropdownPage

