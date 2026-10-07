# SONOMA Quarterly Dataset

Quarterly data for ten small developed economies and two cross-country aggregates used in the SONOMA forecasting system. This is a current-source reconstructed historical dataset, not a collection of original real-time historical data releases.

## Coverage

- **Countries:** Austria, Belgium, Denmark, Finland, Italy, Netherlands, Portugal, Spain, Sweden, and Switzerland
- **Aggregates:** equal-weighted and GDP-weighted SONOMA groups
- **Sample:** 1994-Q4 through 2025-Q3
- **Frequency:** quarterly

Some early observations are missing because of source availability or required lags.

## Variables

| variable | description | units/transformation |
|---|---|---|
| `group` | Country or SONOMA cross-country aggregate. | Text label |
| `quarter` | Calendar quarter. | `YYYY-QX` |
| `rw` | External credit conditions. | Interest rate in decimal format |
| `ew` | Net external equity expected return (NEE-ER) process. | Return in decimal format |
| `re` | Return on the net external equity position. | Return in decimal format |
| `xi` | Domestic credit conditions. | Detrended log index |
| `xh` | Long-run component of productivity. | Growth rate in decimal format |
| `pchgYmG` | Real non-government output growth. | Growth rate in decimal format |
| `pchgI` | Real investment growth. | Growth rate in decimal format |
| `NEDY` | Net external debt-to-output ratio. | Ratio in decimal format |
| `NEEY` | Net external equity-to-output ratio. | Ratio in decimal format |
| `DK` | Corporate leverage, measured as nonfinancial-corporate debt relative to capital. | Ratio in decimal format |

Unless noted otherwise, the distributed model variables are expressed in the same units used by the SONOMA forecasting system and are centered within each country or aggregate.

Aggregate series follow SONOMA's aggregation procedures rather than being constructed from summed country levels.

For additional details on data sources, variable construction, and the empirical methodology, see the appendix of the SONOMA manuscript.

## Citation

Croce, M. M., M. R. Jahan-Parvar, and S. Rosen (2026), “SONOMA: a Small Open ecoNOmy for MAcrofinance,” *Journal of Finance*, forthcoming.
