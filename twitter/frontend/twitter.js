import FollowToggle from './follow_toggle.js';

$( () => {
  const $buttons = $('.follow-toggle');
  $buttons.each(function(_, $button){
    new FollowToggle($button);
  });
});
