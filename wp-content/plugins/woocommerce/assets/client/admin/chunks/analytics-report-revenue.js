"use strict";(globalThis.webpackChunk_wcAdmin_webpackJsonp=globalThis.webpackChunk_wcAdmin_webpackJsonp||[]).push([[3994],{1427:(e,t,r)=>{r.d(t,{Z:()=>v});var a=r(69307),s=r(65736),o=r(94333),n=r(69771),l=r(9818),i=r(92819),c=r(7862),u=r.n(c),m=r(86020),d=r(67221),p=r(81921),y=r(20964),g=r(5213),_=r(10431);function h(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e||0===e.length)return null;const a=e.slice(0),s=a.pop();if(s.showFilters(t,r)){const e=(0,_.flattenFilters)(s.filters),r=t[s.param]||s.defaultValue||"all";return(0,i.find)(e,{value:r})}return h(a,t,r)}function b(e){return t=>(0,n.format)(e,t)}class f extends a.Component{shouldComponentUpdate(e){return e.isRequesting!==this.props.isRequesting||e.primaryData.isRequesting!==this.props.primaryData.isRequesting||e.secondaryData.isRequesting!==this.props.secondaryData.isRequesting||!(0,i.isEqual)(e.query,this.props.query)}getItemChartData(){const{primaryData:e,selectedChart:t}=this.props;return e.data.intervals.map((function(e){const r={};return e.subtotals.segments.forEach((function(e){if(e.segment_label){const a=r[e.segment_label]?e.segment_label+" (#"+e.segment_id+")":e.segment_label;r[e.segment_id]={label:a,value:e.subtotals[t.key]||0}}})),{date:(0,n.format)("Y-m-d\\TH:i:s",e.date_start),...r}}))}getTimeChartData(){const{query:e,primaryData:t,secondaryData:r,selectedChart:a,defaultDateRange:s}=this.props,o=(0,p.getIntervalForQuery)(e,s),{primary:l,secondary:i}=(0,p.getCurrentDates)(e,s);return t.data.intervals.map((function(t,s){const c=(0,p.getPreviousDate)(t.date_start,l.after,i.after,e.compare,o),u=r.data.intervals[s];return{date:(0,n.format)("Y-m-d\\TH:i:s",t.date_start),primary:{label:`${l.label} (${l.range})`,labelDate:t.date_start,value:t.subtotals[a.key]||0},secondary:{label:`${i.label} (${i.range})`,labelDate:c.format("YYYY-MM-DD HH:mm:ss"),value:u&&u.subtotals[a.key]||0}}}))}getTimeChartTotals(){const{primaryData:e,secondaryData:t,selectedChart:r}=this.props;return{primary:(0,i.get)(e,["data","totals",r.key],null),secondary:(0,i.get)(t,["data","totals",r.key],null)}}renderChart(e,t,r,o){const{emptySearchResults:n,filterParam:l,interactiveLegend:i,itemsLabel:c,legendPosition:u,path:y,query:g,selectedChart:_,showHeaderControls:h,primaryData:f,defaultDateRange:v}=this.props,R=(0,p.getIntervalForQuery)(g,v),w=(0,p.getAllowedIntervalsForQuery)(g,v),T=(0,p.getDateFormatsForInterval)(R,f.data.intervals.length,{type:"php"}),q=n?(0,s.__)("No data for the current search","woocommerce"):(0,s.__)("No data for the selected date range","woocommerce"),{formatAmount:C,getCurrencyConfig:D}=this.context;return(0,a.createElement)(m.Chart,{allowedIntervals:w,data:r,dateParser:"%Y-%m-%dT%H:%M:%S",emptyMessage:q,filterParam:l,interactiveLegend:i,interval:R,isRequesting:t,itemsLabel:c,legendPosition:u,legendTotals:o,mode:e,path:y,query:g,screenReaderFormat:b(T.screenReaderFormat),showHeaderControls:h,title:_.label,tooltipLabelFormat:b(T.tooltipLabelFormat),tooltipTitle:"time-comparison"===e&&_.label||null,tooltipValueFormat:(0,d.getTooltipValueFormat)(_.type,C),chartType:(0,p.getChartTypeForQuery)(g),valueType:_.type,xFormat:b(T.xFormat),x2Format:b(T.x2Format),currency:D()})}renderItemComparison(){const{isRequesting:e,primaryData:t}=this.props;if(t.isError)return(0,a.createElement)(g.Z,null);const r=e||t.isRequesting,s=this.getItemChartData();return this.renderChart("item-comparison",r,s)}renderTimeComparison(){const{isRequesting:e,primaryData:t,secondaryData:r}=this.props;if(!t||t.isError||r.isError)return(0,a.createElement)(g.Z,null);const s=e||t.isRequesting||r.isRequesting,o=this.getTimeChartData(),n=this.getTimeChartTotals();return this.renderChart("time-comparison",s,o,n)}render(){const{mode:e}=this.props;return"item-comparison"===e?this.renderItemComparison():this.renderTimeComparison()}}f.contextType=y.$,f.propTypes={filters:u().array,isRequesting:u().bool,itemsLabel:u().string,limitProperties:u().array,mode:u().string,path:u().string.isRequired,primaryData:u().object,query:u().object.isRequired,secondaryData:u().object,selectedChart:u().shape({key:u().string.isRequired,label:u().string.isRequired,order:u().oneOf(["asc","desc"]),orderby:u().string,type:u().oneOf(["average","number","currency"]).isRequired}).isRequired},f.defaultProps={isRequesting:!1,primaryData:{data:{intervals:[]},isError:!1,isRequesting:!1},secondaryData:{data:{intervals:[]},isError:!1,isRequesting:!1}};const v=(0,o.compose)((0,l.withSelect)(((e,t)=>{const{charts:r,endpoint:a,filters:s,isRequesting:o,limitProperties:n,query:l,advancedFilters:c}=t,u=n||[a],m=h(s,l),p=(0,i.get)(m,["settings","param"]),y=t.mode||function(e,t){if(e&&t){const r=(0,i.get)(e,["settings","param"]);if(!r||Object.keys(t).includes(r))return(0,i.get)(e,["chartMode"])}return null}(m,l)||"time-comparison",{woocommerce_default_date_range:g}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),_=e(d.REPORTS_STORE_NAME),b={mode:y,filterParam:p,defaultDateRange:g};if(o)return b;const f=u.some((e=>l[e]&&l[e].length));if(l.search&&!f)return{...b,emptySearchResults:!0};const v=r&&r.map((e=>e.key)),R=(0,d.getReportChartData)({endpoint:a,dataType:"primary",query:l,selector:_,limitBy:u,filters:s,advancedFilters:c,defaultDateRange:g,fields:v});if("item-comparison"===y)return{...b,primaryData:R};const w=(0,d.getReportChartData)({endpoint:a,dataType:"secondary",query:l,selector:_,limitBy:u,filters:s,advancedFilters:c,defaultDateRange:g,fields:v});return{...b,primaryData:R,secondaryData:w}})))(f)},10140:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(69307),s=r(65736),o=r(94333),n=r(9818),l=r(7862),i=r.n(l),c=r(10431),u=r(86020),m=r(81595),d=r(67221),p=r(81921),y=r(14599),g=r(5213),_=r(20964);class h extends a.Component{formatVal(e,t){const{formatAmount:r,getCurrencyConfig:a}=this.context;return"currency"===t?r(e):(0,m.formatValue)(a(),t,e)}getValues(e,t){const{emptySearchResults:r,summaryData:a}=this.props,{totals:s}=a,o=s.primary?s.primary[e]:0,n=s.secondary?s.secondary[e]:0,l=r?0:o,i=r?0:n;return{delta:(0,m.calculateDelta)(l,i),prevValue:this.formatVal(i,t),value:this.formatVal(l,t)}}render(){const{charts:e,query:t,selectedChart:r,summaryData:o,endpoint:n,report:l,defaultDateRange:i}=this.props,{isError:m,isRequesting:d}=o;if(m)return(0,a.createElement)(g.Z,null);if(d)return(0,a.createElement)(u.SummaryListPlaceholder,{numberOfItems:e.length});const{compare:_}=(0,p.getDateParamsFromQuery)(t,i);return(0,a.createElement)(u.SummaryList,null,(t=>{let{onToggle:o}=t;return e.map((e=>{const{key:t,order:i,orderby:m,label:d,type:p,isReverseTrend:g,labelTooltipText:h}=e,b={chart:t};m&&(b.orderby=m),i&&(b.order=i);const f=(0,c.getNewPath)(b),v=r.key===t,{delta:R,prevValue:w,value:T}=this.getValues(t,p);return(0,a.createElement)(u.SummaryNumber,{key:t,delta:R,href:f,label:d,reverseTrend:g,prevLabel:"previous_period"===_?(0,s.__)("Previous period:","woocommerce"):(0,s.__)("Previous year:","woocommerce"),prevValue:w,selected:v,value:T,labelTooltipText:h,onLinkClickCallback:()=>{o&&o(),(0,y.recordEvent)("analytics_chart_tab_click",{report:l||n,key:t})}})}))}))}}h.propTypes={charts:i().array.isRequired,endpoint:i().string.isRequired,limitProperties:i().array,query:i().object.isRequired,selectedChart:i().shape({key:i().string.isRequired,label:i().string.isRequired,order:i().oneOf(["asc","desc"]),orderby:i().string,type:i().oneOf(["average","number","currency"]).isRequired}).isRequired,summaryData:i().object,report:i().string},h.defaultProps={summaryData:{totals:{primary:{},secondary:{}},isError:!1}},h.contextType=_.$;const b=(0,o.compose)((0,n.withSelect)(((e,t)=>{const{charts:r,endpoint:a,limitProperties:s,query:o,filters:n,advancedFilters:l}=t,i=s||[a],c=i.some((e=>o[e]&&o[e].length));if(o.search&&!c)return{emptySearchResults:!0};const u=r&&r.map((e=>e.key)),{woocommerce_default_date_range:m}=e(d.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings");return{summaryData:(0,d.getSummaryNumbers)({endpoint:a,query:o,select:e,limitBy:i,filters:n,advancedFilters:l,defaultDateRange:m,fields:u}),defaultDateRange:m}})))(h)},48709:(e,t,r)=>{r.d(t,{O3:()=>o,be:()=>n,u8:()=>i});var a=r(65736),s=r(92694);const o=(0,s.applyFilters)("woocommerce_admin_revenue_report_charts",[{key:"gross_sales",label:(0,a.__)("Gross sales","woocommerce"),order:"desc",orderby:"gross_sales",type:"currency",isReverseTrend:!1},{key:"refunds",label:(0,a.__)("Returns","woocommerce"),order:"desc",orderby:"refunds",type:"currency",isReverseTrend:!0},{key:"coupons",label:(0,a.__)("Coupons","woocommerce"),order:"desc",orderby:"coupons",type:"currency",isReverseTrend:!1},{key:"net_revenue",label:(0,a.__)("Net sales","woocommerce"),orderby:"net_revenue",type:"currency",isReverseTrend:!1,labelTooltipText:(0,a.__)("Full refunds are not deducted from tax or net sales totals","woocommerce")},{key:"taxes",label:(0,a.__)("Taxes","woocommerce"),order:"desc",orderby:"taxes",type:"currency",isReverseTrend:!1,labelTooltipText:(0,a.__)("Full refunds are not deducted from tax or net sales totals","woocommerce")},{key:"shipping",label:(0,a.__)("Shipping","woocommerce"),orderby:"shipping",type:"currency",isReverseTrend:!1},{key:"total_sales",label:(0,a.__)("Total sales","woocommerce"),order:"desc",orderby:"total_sales",type:"currency",isReverseTrend:!1}]),n=(0,s.applyFilters)("woocommerce_admin_revenue_report_advanced_filters",{filters:{},title:(0,a._x)("Revenue Matches {{select /}} Filters","A sentence describing filters for Revenue. See screen shot for context: https://cloudup.com/cSsUY9VeCVJ","woocommerce")}),l=[];Object.keys(n.filters).length&&(l.push({label:(0,a.__)("All Revenue","woocommerce"),value:"all"}),l.push({label:(0,a.__)("Advanced Filters","woocommerce"),value:"advanced"}));const i=(0,s.applyFilters)("woocommerce_admin_revenue_report_filters",[{label:(0,a.__)("Show","woocommerce"),staticParams:["chartType","paged","per_page"],param:"filter",showFilters:()=>l.length>0,filters:l}])},66141:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var a=r(69307),s=r(7862),o=r.n(s),n=r(48709),l=r(60996),i=r(1427),c=r(10140),u=r(65736),m=r(69771),d=r(9818),p=r(94333),y=r(92819),g=r(86020),_=r(81595),h=r(67221),b=r(81921),f=r(79119),v=r(35063),R=r(27182),w=r(20964);const T=[],q=["orders_count","gross_sales","total_sales","refunds","coupons","taxes","shipping","net_revenue"];class C extends a.Component{constructor(){super(),this.getHeadersContent=this.getHeadersContent.bind(this),this.getRowsContent=this.getRowsContent.bind(this),this.getSummary=this.getSummary.bind(this)}getHeadersContent(){return[{label:(0,u.__)("Date","woocommerce"),key:"date",required:!0,defaultSort:!0,isLeftAligned:!0,isSortable:!0},{label:(0,u.__)("Orders","woocommerce"),key:"orders_count",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Gross sales","woocommerce"),key:"gross_sales",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Returns","woocommerce"),key:"refunds",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Coupons","woocommerce"),key:"coupons",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Net sales","woocommerce"),key:"net_revenue",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Taxes","woocommerce"),key:"taxes",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Shipping","woocommerce"),key:"shipping",required:!1,isSortable:!0,isNumeric:!0},{label:(0,u.__)("Total sales","woocommerce"),key:"total_sales",required:!1,isSortable:!0,isNumeric:!0}]}getRowsContent(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=(0,R.O3)("dateFormat",b.defaultTableDateFormat),{formatAmount:r,render:s,formatDecimal:o,getCurrencyConfig:n}=this.context;return e.map((e=>{const{coupons:l,gross_sales:i,total_sales:c,net_revenue:u,orders_count:d,refunds:p,shipping:y,taxes:h}=e.subtotals,b=(0,a.createElement)(g.Link,{href:"edit.php?post_type=shop_order&m="+(0,m.format)("Ymd",e.date_start),type:"wp-admin"},(0,_.formatValue)(n(),"number",d));return[{display:(0,a.createElement)(g.Date,{date:e.date_start,visibleFormat:t}),value:e.date_start},{display:b,value:Number(d)},{display:s(i),value:o(i)},{display:r(p),value:o(p)},{display:r(l),value:o(l)},{display:s(u),value:o(u)},{display:s(h),value:o(h)},{display:s(y),value:o(y)},{display:s(c),value:o(c)}]}))}getSummary(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const{orders_count:r=0,gross_sales:a=0,total_sales:s=0,refunds:o=0,coupons:n=0,taxes:l=0,shipping:i=0,net_revenue:c=0}=e,{formatAmount:m,getCurrencyConfig:d}=this.context,p=d();return[{label:(0,u._n)("day","days",t,"woocommerce"),value:(0,_.formatValue)(p,"number",t)},{label:(0,u._n)("order","orders",r,"woocommerce"),value:(0,_.formatValue)(p,"number",r)},{label:(0,u.__)("Gross sales","woocommerce"),value:m(a)},{label:(0,u.__)("Returns","woocommerce"),value:m(o)},{label:(0,u.__)("Coupons","woocommerce"),value:m(n)},{label:(0,u.__)("Net sales","woocommerce"),value:m(c)},{label:(0,u.__)("Taxes","woocommerce"),value:m(l)},{label:(0,u.__)("Shipping","woocommerce"),value:m(i)},{label:(0,u.__)("Total sales","woocommerce"),value:m(s)}]}render(){const{advancedFilters:e,filters:t,tableData:r,query:s}=this.props;return(0,a.createElement)(v.Z,{endpoint:"revenue",getHeadersContent:this.getHeadersContent,getRowsContent:this.getRowsContent,getSummary:this.getSummary,summaryFields:q,query:s,tableData:r,title:(0,u.__)("Revenue","woocommerce"),columnPrefsKey:"revenue_report_columns",filters:t,advancedFilters:e})}}C.contextType=w.$;const D=(0,y.memoize)(((e,t,r,a)=>({tableData:{items:{data:(0,y.get)(a,["data","intervals"],T),totalResults:(0,y.get)(a,["totalResults"],0)},isError:e,isRequesting:t,query:r}})),((e,t,r,a)=>[e,t,(0,f.stringify)(r),(0,y.get)(a,["totalResults"],0),(0,y.get)(a,["data","intervals"],T).length].join(":"))),S=(0,y.memoize)(((e,t,r,a,s)=>({interval:"day",orderby:t,order:e,page:r,per_page:a,after:(0,b.appendTimestamp)(s.primary.after,"start"),before:(0,b.appendTimestamp)(s.primary.before,"end")})),((e,t,r,a,s)=>[e,t,r,a,s.primary.after,s.primary.before].join(":"))),F=(0,p.compose)((0,d.withSelect)(((e,t)=>{const{query:r,filters:a,advancedFilters:s}=t,{woocommerce_default_date_range:o}=e(h.SETTINGS_STORE_NAME).getSetting("wc_admin","wcAdminSettings"),n=(0,b.getCurrentDates)(r,o),{getReportStats:l,getReportStatsError:i,isResolving:c}=e(h.REPORTS_STORE_NAME),u=S(r.order||"desc",r.orderby||"date",r.paged||1,r.per_page||h.QUERY_DEFAULTS.pageSize,n),m=(0,h.getReportTableQuery)({endpoint:"revenue",query:r,select:e,tableQuery:u,filters:a,advancedFilters:s}),d=l("revenue",m),p=Boolean(i("revenue",m)),y=c("getReportStats",["revenue",m]);return D(p,y,u,d)})))(C);var E=r(79934);class k extends a.Component{render(){const{path:e,query:t}=this.props;return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(E.Z,{query:t,path:e,report:"revenue",filters:n.u8,advancedFilters:n.be}),(0,a.createElement)(c.Z,{charts:n.O3,endpoint:"revenue",query:t,selectedChart:(0,l.Z)(t.chart,n.O3),filters:n.u8,advancedFilters:n.be}),(0,a.createElement)(i.Z,{charts:n.O3,endpoint:"revenue",path:e,query:t,selectedChart:(0,l.Z)(t.chart,n.O3),filters:n.u8,advancedFilters:n.be}),(0,a.createElement)(F,{query:t,filters:n.u8,advancedFilters:n.be}))}}k.propTypes={path:o().string.isRequired,query:o().object.isRequired}},60996:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(92819);function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const r=(0,a.find)(t,{key:e});return r||t[0]}}}]);