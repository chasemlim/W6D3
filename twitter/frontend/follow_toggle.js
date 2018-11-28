import APIUtil from './api_util.js';

class FollowToggle {
  constructor(el) {
    this.el = $(el);
    this.user_id = this.el.data('user-id');
    this.followState = this.el.data('initial-follow-state');

    console.log(this.el);
    console.log(this.user_id);

    this.render();
    this.handleClick(this.el);
  }

  render() {
    if (this.followState === 'unfollowed') {
      this.el.text("Follow");
    } else {
      this.el.text("Unfollow");
    }
  }

  handleClick() {
    console.log(this.followState);
    this.el.on('click', e => {
      e.preventDefault();
      if (this.followState === 'unfollowed') {
        APIUtil.followUser(this.user_id)
          .then(()=>{
            this.followState = 'followed';
            this.render();
          });
      } else {
        APIUtil.unfollowUser(this.user_id)
          .then(()=>{
            this.followState = 'unfollowed';
            this.render();
          });
      }

    });
  }


}

export default FollowToggle;
