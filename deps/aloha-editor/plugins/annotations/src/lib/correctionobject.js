/*!
 * Licensed under the MIT (MIT-LICENSE.txt) http://creativecommons.org/licenses/MIT/
 * 
 * Copyright (c) 2010 Gentics Software GmbH, Vienna (http://gentics.com)
 * Author Rene Kapusta (http://twitter.com/rene_kapusta)
 * Author Haymo Meran (http://twitter.com/draftkraft)
 */
/**
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Correction object
 * Example:
 * <pre>
 * var correction = new GENTICS.Aloha.Annotations.Correction(origAnnotation, newAnnotation, type)
 * </pre>
 *
 * @param {object} attrs all attributes for RDFa Annotations.
 * @param {object} of @GENTICS.Aloha.Annotations.Namespace objects.
 * @param {string} type of the action ("new", "change", "remove").
 *
 */
GENTICS.Aloha.Annotations.Correction = function(origAnnotation, newAnnotation, type) {

	this.origAnnotation = origAnnotation;
	this.newAnnotaion = newAnnotation;
	this.type = type;
};
