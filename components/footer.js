import React from "react"

import { FooterLinkList, FooterSection, Footer } from "react-mdl"

const FooterStable = () => (
  <div className="footer">
    <Footer size="mini">
      <FooterSection type="left" logo="My Blog">
          <FooterLinkList>
              <a href="#">Privacy & Terms</a>
              <a href="#">&copy; Copyright 2020, Furnicarul</a>
          </FooterLinkList>
        </FooterSection>
    </Footer>
</div>
)

export default FooterStable