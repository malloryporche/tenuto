var projectSeeds = [
 {
	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS1.jpg',
	'altimage2': '/images/RS2.jpg',
	'altimage3': '/images/RS3.jpg',
	'altimage4': '/images/RS4.jpg',
	'altimage5': '/images/RS5.jpg',
	'altimage6': '/images/RS6.jpg',
	'altimage7': '/images/RS7.jpg',
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
 },
 {
 	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
 },
 {
 	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
},
{
	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
},
{
	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
},
{
	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
},
{
	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
},
{
	'name' : 'Roca Lisa',
	'thumb' : '/images/RosaLisaThumb.jpg',
	'altimage1': '/images/RS.jpg'
	'location' : 'Ibiza, Spain',
	'description' : 'A modern villa located on the island of Ibiza. The architecture combines contemporary elements with natural materials. The interior flows onto outdoor terraces capturing views of the Mediterranean.',
	'status' : 'Completed 2014',
	'siteArea' : '2208m',
	'projectArea': '845m',
	'type' : 'Single Residential',
}
]

if(Projects.find().count() === 0 ) {
	_.each(projectSeeds, function(project){
		Projects.insert(project);
		console.log('Inserted ', project.name)
	})
}