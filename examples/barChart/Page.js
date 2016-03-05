import React, { PropTypes } from 'react';

const propTypes = {
  app: PropTypes.string.isRequired,
};

const Page = ({ app }) => (
  <html lang="en">
    <head>
      <style>{ `
        select,
        .chart {
          margin-top: 20px;
          padding: 10px 10px 10px 0;
        }

        select {
          display: block;
        }

        .chart {
          background-color: rgb(240,240,240);
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
