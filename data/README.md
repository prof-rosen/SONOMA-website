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
| `rw` | External credit-condition state. | Quarterly decimal-rate units. |
| `ew` | Expected external equity-return state. | Quarterly return units. |
| `re` | Realized external equity-return state. | Decimal return spread. |
| `xi` | Domestic credit-condition state. | Detrended log index. |
| `xh` | Expected long-run productivity-growth component. | Quarterly fitted-growth units. |
| `pchgYmG` | Real non-government output growth. | Quarterly log change. |
| `pchgI` | Real fixed-investment growth. | Quarterly log change. |
| `NEDY` | Net external debt relative to quarterly output; positive values denote a net external liability position before centering. | Decimal ratio. |
| `NEEY` | Net external equity assets relative to quarterly output; positive values denote a net external asset position before centering. | Decimal ratio. |
| `DK` | Corporate leverage, measured as nonfinancial-corporate debt relative to capital. | Decimal debt-to-capital ratio. |

Unless noted otherwise, the distributed model variables are expressed in the same units used by the SONOMA forecasting system and are centered within each country or aggregate.

Aggregate series follow SONOMA's aggregation procedures rather than being constructed from summed country levels.

For additional details on data sources, variable construction, and the empirical methodology, see the appendix of the SONOMA manuscript.

## Citation

Croce, M. M., M. R. Jahan-Parvar, and S. Rosen (2026), “SONOMA: a Small Open ecoNOmy for MAcrofinance,” *Journal of Finance*, forthcoming.
