import React from 'react'
import { Icon,Divider, Avata, Card, Col} from 'antd'

import { Link } from 'dva/router'
import moment from 'moment'
import ImagePreview from '../../components/ImagePreview'
import appLocaleName from '../../common/Locale.tool'
import BaseTool from '../../common/Base.tool'
import GlobalComponents from '../../custcomponents'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList

const {
	defaultRenderReferenceCell,
	defaultRenderBooleanCell,
	defaultRenderMoneyCell,
	defaultRenderDateTimeCell,
	defaultRenderImageCell,
	defaultRenderAvatarCell,
	defaultRenderDateCell,
	defaultRenderIdentifier,
	defaultRenderTextCell,
	defaultSearchLocalData,
} = BaseTool

const renderTextCell=defaultRenderTextCell
const renderIdentifier=defaultRenderIdentifier
const renderDateCell=defaultRenderDateCell
const renderDateTimeCell=defaultRenderDateTimeCell
const renderImageCell=defaultRenderImageCell
const renderAvatarCell=defaultRenderAvatarCell
const renderMoneyCell=defaultRenderMoneyCell
const renderBooleanCell=defaultRenderBooleanCell
const renderReferenceCell=defaultRenderReferenceCell



const menuData = {menuName: window.trans('retail_store_city_service_center'), menuFor: "retailStoreCityServiceCenter",
  		subItems: [
  {name: 'cityPartnerList', displayName: window.mtrans('city_partner','retail_store_city_service_center.city_partner_list',false), type:'cityPartner',icon:'city',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'potentialCustomerList', displayName: window.mtrans('potential_customer','retail_store_city_service_center.potential_customer_list',false), type:'potentialCustomer',icon:'om',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'cityEventList', displayName: window.mtrans('city_event','retail_store_city_service_center.city_event_list',false), type:'cityEvent',icon:'city',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  {name: 'retailStoreList', displayName: window.mtrans('retail_store','retail_store_city_service_center.retail_store_list',false), type:'retailStore',icon:'store',readPermission: false,createPermission: false,deletePermission: false,updatePermission: false,executionPermission: false, viewGroup: '__no_group'},
  
  		],
}


const settingMenuData = {menuName: window.trans('retail_store_city_service_center'), menuFor: "retailStoreCityServiceCenter",
  		subItems: [
  
  		],
}

const fieldLabels = {
  id: window.trans('retail_store_city_service_center.id'),
  name: window.trans('retail_store_city_service_center.name'),
  founded: window.trans('retail_store_city_service_center.founded'),
  belongsTo: window.trans('retail_store_city_service_center.belongs_to'),
  lastUpdateTime: window.trans('retail_store_city_service_center.last_update_time'),

}

const displayColumns = [
  { title: fieldLabels.id, debugtype: 'string', dataIndex: 'id', width: '8', render: (text, record)=>renderTextCell(text,record,'retailStoreCityServiceCenter') , sorter: true },
  { title: fieldLabels.name, debugtype: 'string', dataIndex: 'name', width: '13',render: (text, record)=>renderTextCell(text,record)},
  { title: fieldLabels.founded, dataIndex: 'founded', render: (text, record) =>renderDateCell(text,record), sorter: true },
  { title: fieldLabels.belongsTo, dataIndex: 'belongsTo', render: (text, record) => renderReferenceCell(text, record), sorter:true},
  { title: fieldLabels.lastUpdateTime, dataIndex: 'lastUpdateTime', render: (text, record) =>renderDateTimeCell(text,record), sorter: true},

]


const searchLocalData =(targetObject,searchTerm)=> defaultSearchLocalData(menuData,targetObject,searchTerm)

const renderItemOfList=(retailStoreCityServiceCenter, targetComponent, columCount)=>{
  const displayColumnsCount = columCount || 2
  const userContext = null
  return (
    <div key={retailStoreCityServiceCenter.id}>
	
      <DescriptionList  key={retailStoreCityServiceCenter.id} size="small" col="2" >
        <Description term={fieldLabels.id} style={{wordBreak: 'break-all'}}>{retailStoreCityServiceCenter.id}</Description> 
        <Description term={fieldLabels.name} style={{wordBreak: 'break-all'}}>{retailStoreCityServiceCenter.name}</Description> 
        <Description term={fieldLabels.founded}><div>{ moment(retailStoreCityServiceCenter.founded).format('YYYY-MM-DD')}</div></Description> 
        <Description term={fieldLabels.belongsTo}><div>{retailStoreCityServiceCenter.belongsTo==null?appLocaleName(userContext,"NotAssigned"):`${retailStoreCityServiceCenter.belongsTo.displayName}(${retailStoreCityServiceCenter.belongsTo.id})`}
        </div></Description>
        <Description term={fieldLabels.lastUpdateTime}><div>{ moment(retailStoreCityServiceCenter.lastUpdateTime).format('YYYY-MM-DD HH:mm')}</div></Description> 
	
        
      </DescriptionList>
      <Divider style={{ height: '2px' }} />
    </div>
	)

}
	
const packFormValuesToObject = ( formValuesToPack )=>{
	const {name, founded, belongsToId} = formValuesToPack
	const belongsTo = {id: belongsToId, version: 2^31}
	const data = {name, founded, belongsTo}
	return data
}
const unpackObjectToFormValues = ( objectToUnpack )=>{
	const {name, founded, belongsTo} = objectToUnpack
	const belongsToId = belongsTo ? belongsTo.id : null
	const data = {name, founded, belongsToId}
	return data
}
const stepOf=(targetComponent, title, content, position, index)=>{
	return {
		title,
		content,
		position,
		packFunction: packFormValuesToObject,
		unpackFunction: unpackObjectToFormValues,
		index,
      }
}
const RetailStoreCityServiceCenterBase={menuData,displayColumns,fieldLabels,renderItemOfList, stepOf, searchLocalData}
export default RetailStoreCityServiceCenterBase



