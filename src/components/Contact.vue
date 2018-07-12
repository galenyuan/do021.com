<style>

</style>

<template>
<div id="contact" class="section-block replicable-content bkg-gradient-light-ocean in-view">
  <div class="row">
    <div class="column width-6 offset-3 center">
      <h3 class="mb-30 color-white">{{ STRING.title }}</h3>
      <div class="register-form-container">
        <form class="register-form" action="https://fp1.formmail.com/cgi-bin/fm192" method="post" novalidate="">
          <input type="hidden" name="_pid" value="154274">
          <input type="hidden" name="_fid" value="J8I34U8X">
          <div class="row merged-form-elements">
            <div class="column width-6">
              <div class="field-wrapper">
                <label class="color-white">{{ STRING.firstName }}:</label>
                <input type="text" name="firstname" class="form-firstname form-element rounded medium center" placeholder="某某" required="">
              </div>
            </div>
            <div class="column width-6">
              <div class="field-wrapper">
                <label class="color-white">{{ STRING.lastName }}:</label>
                <input type="text" name="lastname" class="form-lastname form-element rounded medium center" placeholder="王" required="">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column width-12">
              <div class="field-wrapper">
                <label class="color-white">{{ STRING.contact }}:</label>
                <input type="email" name="contact" class="form-email form-element rounded medium center" placeholder="有效的邮箱或者手机号码" required="">
              </div>
            </div>
            <div class="column width-12">
              <div class="field-wrapper">
                <label class="color-white">{{ STRING.message }}</label>
                <textarea  rows="6" name="message" class="form-password form-element rounded medium center" placeholder="这里留下你的消息，我们会尽快回复。" required="">
                </textarea>
              </div>
            </div>
            <div class="column width-12 mt-10">
              <input type="submit" :value="STRING.submit" class="form-submit button rounded medium border-white bkg-hover-blue-light bkg-focus-green color-white color-hover-white no-margins">
            </div>
          </div>
        </form>
        <div class="form-response show"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      STRING: window.TEMPLATE_CONTENT.contact
    }
  }
}
</script>
