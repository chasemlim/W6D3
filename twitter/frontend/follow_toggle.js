class FollowToggle {
  constructor($el) {
    this.user_id = $el.user_id;
    this.followState = $el.initial_follow_state;
    // this.el = $($el);
  }
}

module.exports = FollowToggle;
