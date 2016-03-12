import React, { PropTypes } from 'react';

const propTypes = {
  app: PropTypes.string.isRequired,
};

const Page = ({ app }) => (
  <html lang="en">
    <head>
      <style>{ `
        html,
        body,
        .app,
        .content {
          height: 100%;
          margin: 0;
        }

        select {
          position: absolute;
          right: 10px;
          top: 10px;
        }

        select {
          display: block;
        }

        .chart {
          background-color: rgb(240,240,240);
          box-sizing: border-box;
          height: 100%;
          padding: 40px 10px 10px 0;
          width: 100%;
        }

        .chart:after {
          content: "";
          display: table;
          clear: both;
        }
      ` }</style>
    </head>
    <body>
      <section className="app" dangerouslySetInnerHTML={{ __html: app }} />
      <script src="/client.dist.js" />
    </body>
  </html>
);

Page.propTypes = propTypes;

export default Page;
