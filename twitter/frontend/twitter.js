import FollowToggle from './follow_toggle.js';

$( () => {
  const $buttons = $('.follow-toggle');
  $buttons.each(function(_, $button){
    new FollowToggle($button);
  });
});

$( () => {
  const $searchWidgets = $('nav.users-search');
  $searchWidgets.each(function(_, $searchWidget){
    new UsersSearch($searchWidget);
  });
});
