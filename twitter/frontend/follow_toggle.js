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
        console.log('tree');
        $.ajax({
          url: `/users/${this.user_id}/follow`,
          method: 'POST',
          dataType: 'JSON'
        });
        this.followState = 'followed';
      } else {
        console.log('river');

        $.ajax({
          url: `/users/${this.user_id}/follow`,
          method: 'DELETE',
          dataType: 'JSON'
        });
        this.followState = 'unfollowed';
      }
    this.render();
    });
  }


}

module.exports = FollowToggle;
